from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views
from .views import GetCompanyInfo

urlpatterns = [
    #기업 순위
    #기업 전체 리스트(미리보기 기업 구분,기업명,로고 - 순위 x)
    path('', views.CompanyList.as_view(), name='company-list'),
    #total_grade 순위 상위3개(클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-preview/', views.TopCompanyPreview.as_view(), name='top-companies-preview'),
    #total_grade 순위 전체 리스트 (클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies/', views.TopCompanyList.as_view(), name='top-companies'),
    #social_grade 순위 상위3개(클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-preview-social/', views.TopCompanyPreviewSocial.as_view(), name='top-companies-preview-social'),
    #social_grade 순위 전체 리스트(클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-social/', views.TopCompanyListSocial.as_view(), name='top-companies-social'),
    #env_grade 순위 상위3개(클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-preview-env/', views.TopCompanyPreviewEnv.as_view(), name='top-companies-preview-env'),
    #env_grade 순위 전체 리스트 (클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-env/', views.TopCompanyListEnv.as_view(), name='top-companies-env'),
    #gov_grade 순위 상위3개(클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-preview-gov/', views.TopCompanyPreviewGov.as_view(), name='top-companies-preview-gov'),
    #gov_grade 순위 전체 리스트 (클릭 전 미리보기 기업 구분,기업명,로고)
    path('top-companies-gov/', views.TopCompanyListGov.as_view(), name='top-companies-gov'),

    #기업 상세 조회
    path('<int:company_id>/', GetCompanyInfo.as_view(), name='get_company_info'),
    #기업 댓글
    #기업별 댓글 리스트
    path('<int:company_id>/comments/', views.CommentList.as_view(), name='comment-list'),
    #댓글 작성
    path('comments/create/', views.CommentCreate.as_view(), name='comment-create'),


    #설문
    #설문 결과
    path('survey/', views.CalculateSurvey.as_view(), name='comment-list'),



]

