from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer, BlogPostTitleExcerptSerializer
# from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly



@api_view(['GET', 'POST'])
def blog_post_list(request):
    if request.method == 'GET':
        queryset = BlogPost.objects.all()
        serializer = BlogPostTitleExcerptSerializer(queryset, many=True) 
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'POST'])
def blog_post_detail(request, pk):
    try:
        blog_post = BlogPost.objects.get(pk=pk)
    except BlogPost.DoesNotExist:
        return Response({'error': 'Blog post not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BlogPostSerializer(blog_post)
        comments = Comment.objects.filter(blog_post=blog_post)
        comment_serializer = CommentSerializer(comments, many=True)
        data = {
            'blog_post': serializer.data,
            'comments': comment_serializer.data
        }
        return Response(data)

    elif request.method == 'POST':
        
        name = request.data.get('name')
        email = request.data.get('email')
        comment_text = request.data.get('comment_text')

        # Create a new comment
        comment = Comment(name=name, email=email, comment_text=comment_text, blog_post=blog_post)
        comment.save()

        # Return the updated list of comments for the blog post
        comments = Comment.objects.filter(blog_post=blog_post)
        comment_serializer = CommentSerializer(comments, many=True)
        return Response(comment_serializer.data, status=status.HTTP_201_CREATED)




@api_view(['POST'])
def comment_create(request, blog_post_id):
    try:
        blog_post = BlogPost.objects.get(pk=blog_post_id)
    except BlogPost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(blog_post=blog_post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






# Tech Blog Posts
@api_view(['GET', 'POST'])
def tech_blog_posts(request):
    if request.method == 'GET':
        tech_posts = BlogPost.objects.filter(category__name='Tech')
        serializer = BlogPostSerializer(tech_posts, many=True)
        serialized_posts = []

        for post in serializer.data:
            comments = Comment.objects.filter(blog_post=post['id'])
            comment_serializer = CommentSerializer(comments, many=True)
            post['comments'] = comment_serializer.data
            serialized_posts.append(post)

        return Response(serialized_posts, status=status.HTTP_200_OK)

   



# Travel Blog Posts
@api_view(['GET', 'POST'])
def travel_blog_posts(request):
    if request.method == 'GET':
        travel_posts = BlogPost.objects.filter(category__name='Travel')
        serializer = BlogPostSerializer(travel_posts, many=True)
        serialized_posts = []

        for post in serializer.data:
            comments = Comment.objects.filter(blog_post=post['id'])
            comment_serializer = CommentSerializer(comments, many=True)
            post['comments'] = comment_serializer.data
            serialized_posts.append(post)

        return Response(serialized_posts, status=status.HTTP_200_OK)

   



# Food Blog Posts
@api_view(['GET', 'POST'])
def food_blog_posts(request):
    if request.method == 'GET':
        food_posts = BlogPost.objects.filter(category__name='Food')
        serializer = BlogPostSerializer(food_posts, many=True)
        serialized_posts = []

        for post in serializer.data:
            comments = Comment.objects.filter(blog_post=post['id'])
            comment_serializer = CommentSerializer(comments, many=True)
            post['comments'] = comment_serializer.data
            serialized_posts.append(post)

        return Response(serialized_posts, status=status.HTTP_200_OK)

   


