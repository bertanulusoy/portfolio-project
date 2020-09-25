from django.shortcuts import render
import jobs

def home(request):
  return render(request, 'jobs/home.html')
