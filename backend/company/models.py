from django.db import models

class Company(models.Model):
    company_name = models.CharField(max_length=100)
    company_img = models.ImageField(upload_to='company_images/')
    total_grade = models.CharField(max_length=10)
    social_grade = models.CharField(max_length=10)
    env_grade = models.CharField(max_length=10)
    gov_grade = models.CharField(max_length=10)
    profit = models.FloatField()
    revenue = models.FloatField()
    stock = models.ImageField(upload_to='company_stock_images/')
    industry = models.CharField(max_length=50)
    division = models.CharField(max_length=50)

    def __str__(self):
        return self.company_name


class Comment(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']  # created_at 필드를 기준으로 최신순으로 정렬