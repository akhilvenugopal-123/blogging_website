"""
URL configuration for blog project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from apiblog import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.blog_post_list, name='blog_post_list'),
    path('blog/<int:pk>/', views.blog_post_detail, name='blog_post_detail'),
    path('blog/<int:blog_post_id>/comments/', views.comment_create, name='comment_create'),
    path('tech/', views.tech_blog_posts, name='tech-blog-posts'),
    path('travel/', views.travel_blog_posts, name='travel-blog-posts'),
    path('food/', views.food_blog_posts, name='food-blog-posts'),
]
