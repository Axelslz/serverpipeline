pipeline {
    agent any

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Limpiar Contenedores') {
            steps {
                script {
                    def containers = sh(script: 'docker ps -q', returnStdout: true).trim()
                    if (containers) {
                        sh "docker stop ${containers}"
                    } else {
                        echo 'No running containers to stop.'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build('pipeline-hello-world')
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image('pipeline-hello-world').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.run('pipeline-hello-world', '-d -p 3000:3000')
                }
            }
        }
    }
}
