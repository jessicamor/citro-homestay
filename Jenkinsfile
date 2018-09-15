pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
		rm -r /build
                mkdir /build
		cd /build
		pwd
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
