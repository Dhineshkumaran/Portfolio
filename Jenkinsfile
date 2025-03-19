pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-app-image"
        DOCKER_CONTAINER = "my-app-container"
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

        stage('Dockerize') {
            steps {
                echo "Building Docker image..."
                script {
                    try {
                        sh 'echo "Dhinesh123#"|sudo docker build -t ${DOCKER_IMAGE} .'
                    } catch (Exception e) {
                        echo "Error during Docker build"
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running Docker container..."
                script {
                    try {
                        // Run the Docker container in detached mode
                        sh 'echo "Dhinesh123#"|sudo docker run -d --name ${DOCKER_CONTAINER} ${DOCKER_IMAGE}'
                    } catch (Exception e) {
                        echo "Error running Docker container"
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
    }
}

