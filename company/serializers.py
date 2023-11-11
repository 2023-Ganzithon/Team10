from rest_framework import serializers, generics
from .models import Company, Comment

#기업정보 미리보기 시리얼라이저 ('division', 'company_name', 'company_img' 3개 요소만 )
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id','industry', 'company_name', 'company_img']


#댓글 시리얼라이저
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

    def validate_text(self, value):
        # 공백 문자를 제거한 후 검사 (strip 사용)
        if not value.strip():
            raise serializers.ValidationError("댓글 내용을 공백으로 남길 수 없습니다.")
        return value


#기업 상세정보 모두 반환하는 시리얼라이저(설문, 순위 2depth)에서 활용
class CompanyAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'