// CODE_CHANGES = getGitChanges()

pipeline {
    agent {label "test_vm2"}
    environment{
        GIT_REGISTRY = "registry.gitlab.com/softdev8314607/"
        IMAGE_NAME = "softdevcicd"
    }
    stages {
        stage("clear containers and images if exist") {
            steps {
                script {
                    def runningContainers = sh(script: "docker ps -q | wc -l", returnStdout: true).trim().toInteger()
                    
                    if (runningContainers > 0) {
                        sh 'docker stop $(docker ps -a -q)'
                    } else {
                        echo "No action required. Running container count: $runningContainers"
                    }
                }
            }
        }

        stage("install packages") {
            steps {
                echo "install packages of the application..."
                sh "npm install"
            }
        }

        stage("run unit-test") {
            steps {
                echo "testing the application..."
                sh "npm test"
            }
        }

        stage("create images of simple-api") {
            steps {
                echo "creating image..."
                sh "docker build -t ${GIT_REGISTRY}${IMAGE_NAME} ."
            }
        }

         stage("create container of simple-api") {
            steps {
                echo "creating image..."
                sh "docker run -d ${GIT_REGISTRY}${IMAGE_NAME}"
            }
        }

        // stage("robot") {
        //     steps {
        //         // echo "Cloning Robot"
        //         // dir("./robot/") {
        //         //     git branch: "main", url: "https://github.com/Rosemarries/Jenkins1001.git"
        //         // }
        //         echo "Run Robot"
        //         sh "python3 -m robot --outputdir robot_result ./test-plus.robot"
        //     }
        // }

        stage("push to registry") {
            steps {
                sh "docker push ${GIT_REGISTRY}${IMAGE_NAME}"
                echo "Push Success!"
            }
        }


        // stage("deploy") {
        //     steps {
        //         echo "deploying the application..."
        //         sh "docker compose up -d --build"
        //     }
        // }
    }
}

