import datetime

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from django.shortcuts import get_object_or_404

from .models import Resume, Education, Job, Achievement, Project

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

current_format = "%d-%m-%Y"
desired_format = "%Y-%m-%d"

def convert_date_format(date_string, current_format, desired_format):
    """
    Convert a date string from one format to another.

    Parameters:
    - date_string (str): The date string to be converted.
    - current_format (str): The format of the current date string.
    - desired_format (str): The desired format for the converted date string.

    Returns:
    - str: The converted date string in the desired format.
    """
    try:
        # Parse the current date string with the current format
        date_object = datetime.datetime.strptime(date_string, current_format)
        # Format the date object with the desired format
        converted_date_string = date_object.strftime(desired_format)
        return converted_date_string
    except ValueError:
        # Handle invalid date string or format
        return None

@csrf_exempt
def create_resume(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(f"#data {data}")

        # Create Resume object

        try:
            resume = Resume.objects.get(user_id = data["user_id"])
            return update_resume(request)

        except Resume.DoesNotExist:

            # print(f"{resume}")

            resume = Resume.objects.create(
                user_id=data["user_id"],
                first_name=data['first_name'],
                last_name=data['last_name'],
                phone_no=data['phone_no'],
                email=data['email'],
                address=data['address'],
                social_links=json.dumps(data['social_links']),  # Serialize social_links to JSON string
                soft_skill=json.dumps(data['soft_skill']),  # Serialize social_links to JSON string
                technical_skill=json.dumps(data['technical_skill']),  # Serialize social_links to JSON string
            )
            # Create Education objects
            for edu_data in data['education']:
                Education.objects.create(
                    resume=resume,
                    title=edu_data['title'],
                    year=edu_data['year']
                )

            # Create Job objects
            for job_data in data['job']:
                Job.objects.create(
                    resume=resume,
                    company=job_data['company'],
                    role=job_data['role'],
                    description=job_data['desp'],
                    date=convert_date_format(job_data['date'], current_format, desired_format),
                    is_current=job_data['is_current']
                )

            # Create Achievement objects
            for achievement_data in data['achievement']:
                Achievement.objects.create(
                    resume=resume,
                    title=achievement_data['title'],
                    description=achievement_data['desp'],
                    date=convert_date_format(achievement_data['date'], current_format, desired_format)
                )

            # Create Project objects
            for project_data in data['project']:
                Project.objects.create(
                    resume=resume,
                    title=project_data['title'],
                    description=project_data['desp'],
                    link=project_data['link']
                )

            return JsonResponse({'message': 'Resume created successfully'}, status=201)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


def get_resume(request, user_id):
    # Fetch the resume if it exists, otherwise return a 404 response
    # resume = get_object_or_404(Resume, user_id=user_id)

    resume = Resume.objects.get(user_id = user_id)


    resume_data = {
        'first_name': resume.first_name,
        'last_name': resume.last_name,
        'phone_no': resume.phone_no,
        'email': resume.email,
        'address': resume.address,
        'social_links': resume.social_links,  # No need to deserialize as we're returning raw JSON data
        'education': [{'title': edu.title, 'year': edu.year} for edu in resume.education.all()],
        'job': [{'company': job.company, 'role': job.role, 'desp': job.description, 'date': job.date, 'is_current': job.is_current} for job in resume.job.all()],
        'achievement': [{'title': ach.title, 'desp': ach.description, 'date': ach.date} for ach in resume.achievements.all()],
        'soft_skill': resume.soft_skill,
        'technical_skill': resume.technical_skill,
        'project': [{'title': project.title, 'desp': project.description, 'link': project.link} for project in resume.projects.all()]
    }

    return JsonResponse(resume_data)


@csrf_exempt
def update_resume(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('user_id')

        # Check if a resume with the given user_id exists
        try:
            resume = Resume.objects.get(user_id=user_id)
        except Resume.DoesNotExist:
            return JsonResponse({'error': 'Resume with user_id {} does not exist'.format(user_id)}, status=404)

        # Update basic resume fields
        resume.first_name = data.get('first_name', resume.first_name)
        resume.last_name = data.get('last_name', resume.last_name)
        resume.phone_no = data.get('phone_no', resume.phone_no)
        resume.email = data.get('email', resume.email)
        resume.address = data.get('address', resume.address)
        resume.social_links = json.dumps(data.get('social_links', resume.social_links))
        resume.soft_skill = json.dumps(data.get('soft_skill', resume.soft_skill))
        resume.technical_skill = json.dumps(data.get('technical_skill', resume.technical_skill))
        resume.save()

        # Update education
        Education.objects.filter(resume=resume).delete()  # Clear existing education entries
        education_data = data.get('education', [])
        for edu_data in education_data:
            Education.objects.create(
                resume=resume,
                title=edu_data['title'],
                year=edu_data['year']
            )

        # Update job experience
        Job.objects.filter(resume=resume).delete()  # Clear existing job entries
        job_data = data.get('job', [])
        for job_info in job_data:
            Job.objects.create(
                resume=resume,
                company=job_info['company'],
                role=job_info['role'],
                description=job_info['desp'],
                date=convert_date_format(job_info['date'], current_format, desired_format),
                is_current=job_info['is_current']
            )

        # Update achievements
        Achievement.objects.filter(resume=resume).delete()  # Clear existing achievement entries
        achievement_data = data.get('achievement', [])
        for achievement_info in achievement_data:
            Achievement.objects.create(
                resume=resume,
                title=achievement_info['title'],
                description=achievement_info['desp'],
                date=convert_date_format(achievement_info['date'], current_format,desired_format)
            )

        # Update projects
        Project.objects.filter(resume=resume).delete()  # Clear existing project entries
        project_data = data.get('project', [])
        for project_info in project_data:
            Project.objects.create(
                resume=resume,
                title=project_info['title'],
                description=project_info['desp'],
                link=project_info['link']
            )

        return JsonResponse({'message': 'Resume updated successfully'}, status=200)

    return JsonResponse({'error': 'Method not allowed'}, status=405)