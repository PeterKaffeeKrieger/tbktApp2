pipeline {
    agent any
    environment {
					CHROME_BIN = 'chrome'
	}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
				sh 'npm run electron-build'
				sh 'npm run electron-package-darwin'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm install'
            }
        }
    }
}