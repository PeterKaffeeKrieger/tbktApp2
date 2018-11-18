pipeline {
    agent {
        docker {
            image 'node:8.12.0-alpine'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
		sh 'npm run electron-build'
		sh 'npm run electron-package-darwin'
            }
        }
    }
}