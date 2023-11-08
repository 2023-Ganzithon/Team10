from rest_framework import serializers
from .models import Company


#기업정보 미리보기 시리얼라이저
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['division', 'company_name', 'company_img']