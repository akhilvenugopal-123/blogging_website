from django.db import models

# Create your models here.

class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    excerpt = models.TextField()

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    excerpt = models.TextField()
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100)  # Store the author's name as a string

    def __str__(self):
        return self.title


class Comment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255, default='example@example.com')  
    comment_text = models.TextField()
    blog_post = models.ForeignKey(BlogPost, on_delete=models.CASCADE)

    def __str__(self):
       return "Comment by %s on %s" % (self.name, self.blog_post.title)

