# views.py
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView

from company.models import Company
from company.serializers import CompanySerializer, CompanyAllInfoSerializer
from rest_framework import generics, status

from create_dummy_data import company13, company18, company19
from .models import Comment
from .serializers import CommentSerializer

#전체 기업 리스트
class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
#total_grade - top 3개
class TopCompanyPreview(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('total_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)[:3]

#total_grade -전체 순위
class TopCompanyList(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('total_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)

#social_grade - top 3개
class TopCompanyPreviewSocial(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('social_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)[:3]

#social_grade -전체 순위
class TopCompanyListSocial(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('social_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)

#env_grade - top 3개
class TopCompanyPreviewEnv(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('env_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)[:3]

#env_grade -전체 순위
class TopCompanyListEnv(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('env_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)

#gov_grade - top 3개
class TopCompanyPreviewGov(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('gov_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)[:3]

#gov_grade -전체 순위
class TopCompanyListGov(generics.ListAPIView):
    grade_mapping = {
        "A+": 3,
        "A": 2,
        "B+": 1,
    }

    queryset = Company.objects.order_by('gov_grade')
    serializer_class = CompanySerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # grade_mapping을 기반으로 정렬
        return sorted(queryset, key=lambda x: self.grade_mapping.get(x.total_grade, 0), reverse=True)



#커뮤니티 댓글
#댓글 리스트
class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']  # URL에서 회사 ID를 가져옴
        return Comment.objects.filter(company=company_id)

#댓글 작성
class CommentCreate(generics.CreateAPIView):
    serializer_class = CommentSerializer


class CalculateSurvey(APIView):
    #분야별 등급 계산기
    def calculate_grade_area(self, score):
        if score >= 9:
            return 'A+'
        elif score >= 6:
            return 'A'
        else:
            return 'B+'
    #종합 등급 계산기
    def calculate_grade(self, score):
        if score >= 37 and score <= 56 :
            return 'A+'
        elif  score >= 36 and score <= 17:
            return 'A'
        else:
            return 'B+'

    def post(self, request, *args, **kwargs):
        # 클라이언트로부터 데이터 받기
        social_grade = self.calculate_grade_area(int(request.data.get('social_total')))
        env_grade = self.calculate_grade_area(int(request.data.get('env_total')))
        gov_grade = self.ccalculate_grade_area(int(request.data.get('gov_total')))
        user_total_grade = self.calculate_grade(int(request.data.get('total')))
        # 기업을 등급과 일치하는 기업을 찾기
        # 선예외 처리 - 중복 기업
        if (social_grade == 'A+' and env_grade == 'B+' and gov_grade ==  'A+'):
            matching_company = company13
        elif social_grade == 'B+' and env_grade == 'A+' and gov_grade == 'A+':
            matching_company = company18
        elif social_grade == 'B+' and env_grade == 'A+' and gov_grade == 'A':
            matching_company = company18
        elif social_grade == 'B+' and env_grade == 'A' and gov_grade == 'A+':
            matching_company = company18
        elif social_grade == 'B+' and env_grade == 'A' and gov_grade == 'A':
            matching_company = company19
        else:

            matching_company = Company.objects.filter(
                Q(social_grade=social_grade) &
                Q(env_grade=env_grade) &
                Q(gov_grade=gov_grade)
            ).first()

        # CompanyAllInfoSerializer를 사용하여 응답 데이터 구성
        serializer = CompanyAllInfoSerializer(matching_company)
        serialized_data = serializer.data

        # total_score 필드를 추가
        serialized_data['user_total_grade'] = user_total_grade

        # 클라이언트에게 응답 보내기
        return Response(serialized_data, status=status.HTTP_200_OK)

#company 3depth(상세 정보 조회)
class GetCompanyInfo(APIView):
    def get(self, request, company_id, *args, **kwargs):
        try:
            # 주어진 company_id에 해당하는 기업 객체 가져오기
            company = Company.objects.get(id=company_id)

            # CompanyAllInfoSerializer를 사용하여 응답 데이터 구성
            serializer = CompanyAllInfoSerializer(company)
            serialized_data = serializer.data

            # 클라이언트에게 응답 보내기
            return Response(serialized_data, status=status.HTTP_200_OK)

        except Company.DoesNotExist:
            # 주어진 company_id에 해당하는 기업이 없는 경우
            return Response(
                {"detail": f"Company with ID {company_id} does not exist."},
                status=status.HTTP_404_NOT_FOUND
            )