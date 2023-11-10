"""mesg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import path, include, re_path  # include를 추가
from django.conf.urls.static import static
from django.conf import settings
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', include('company.urls')),  # company 앱의 URLs를 포함시킴
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root':settings.MEDIA_ROOT}), #배포시 필요해서(미디어 루트 읽어오게)
]
#이미지 파일 처리
#if settings.DEBUG: -> 뭔가 나중에 문제 생길거같아서 일단 뺌
#이거 배포시에는 필요 없다는데
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
