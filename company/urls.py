from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # 다른 URL 패턴들을 여기에 추가
]
#이미지 파일 처리
#if settings.DEBUG: -> 뭔가 나중에 문제 생길거같아서 일단 뺌
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
