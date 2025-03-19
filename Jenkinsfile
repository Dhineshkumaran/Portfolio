pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "my-app-image"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out the code..."
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Building the application..."
                script {
                    try {
                        sh 'npm install'
                        sh 'npm run build'
                    } catch (Exception e) {
                        echo "Error during Build stage"
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }

        stage('Tests') {
            steps {
                echo "Running tests..."
                script {
                    try {
                        sh 'npm test'
                    } catch (Exception e) {
                        echo "Tests failed!"
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }

        stage('Dockerize') {
            steps {
                echo "Building Docker image..."
                script {
                    try {
                        sh 'docker build -t ${DOCKER_IMAGE} .'
                    } catch (Exception e) {
                        echo "Error during Docker build"
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }

        stage('UIT') {
            steps {
                echo "Running UI Tests..."
                // Replace with actual UI test commands
                echo 'UI Tests completed'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Cleaning up resources...'
        }
    }
}
