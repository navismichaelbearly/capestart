from rest_framework import serializers
from backendapi.models import Book, Author

class BookSerializer(serializers.ModelSerializer):

    class Meta:
            model = Book
            fields = ('title','desc', 'price', 'published_on')


class AuthorSerializer(serializers.ModelSerializer):

    books = BookSerializer(many=True)

    class Meta:
        model = Author
        fields = ( 'first_name', 'last_name', 'books')
