ARG PROJECT_ID
ARG BUILD_SHA

FROM gcr.io/$PROJECT_ID/flutter:main

WORKDIR /pkgs/dartpad_shared
COPY pkgs/dartpad_shared .

WORKDIR /pkgs/dart_services
COPY pkgs/dart_services .

RUN dart pub get
#RUN dart --enable-experiment=native-assets compile exe bin/server.dart -o bin/server

RUN dart --enable-experiment=native-assets run grinder build-project-templates
RUN sed -e "s/thermion_dart: 0.1.0+1/thermion_dart: 0.1.1/g" -iext project_templates/dart_project/pubspec.yaml

ENV BUILD_SHA=$BUILD_SHA

EXPOSE 8080
ENTRYPOINT ["dart", "--enable-experiment=native-assets", "bin/server.dart"]
