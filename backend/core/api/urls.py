from rest_framework.routers import DefaultRouter
from posts.api.urls import post_router
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
#Posts
router.registry.extend(post_router.registry)

urlpatterns = [
    path('', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

