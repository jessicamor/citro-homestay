pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
		rm -r /build
                mkdir /build
		cd /build
		git clone https://github.com/jessicamor/citro-homestay.git

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
