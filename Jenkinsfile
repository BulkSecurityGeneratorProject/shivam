#!/usr/bin/env groovy

node {
  
        stage('checkout') {
            checkout scm
        }

        dir('women-cell'){
            stage('check java') {
                sh "java -version"
            }

            stage('clean') {
                sh "chmod +x mvnw"
                sh "./mvnw clean"
            }

            stage('packaging') {
                sh "./mvnw package -Pprod -DskipTests"
                archiveArtifacts artifacts: '**/target/*.war', fingerprint: true
            }

            def dockerImage
            stage('build docker') {
                sh "cp -R src/main/docker target/"
                sh "cp target/*.war target/docker/"
                dockerImage = docker.build('shivam', 'target/docker')
            }
  

    }
   
}
