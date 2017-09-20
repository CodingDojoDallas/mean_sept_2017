# Deployment Instructions

Follow instructions on Learn to create a new Amazon EC2 instance.  Make sure to select `Ubuntu 16.04`.  You can use an existing `.pem` file or you can create a new one.  Save the `.pem` file in a location OUTSIDE OF YOUR PROJECT FOLDER.  A folder on the desktop for `.pem` files is a good idea.

Create a new repository on GitLab for your project.

Navigate to your project's root directory
```
cd {{ path_to_your_project }}
```
Set up the `.gitignore` file
```
vim .gitignore
```
You're now using VIM.  Press i to go into Insert Mode.  Then, paste the following code:
```
/node_modules
```
Press esc to exit Insert Mode.  Then, type :wq  Then press enter to save the file and exit VIM.

Push your changes to GitLab
```
git add .
git commit -m 'added gitignore'
git push
```
Navigate to the directory of your `.pem` file

If you've never used this `.pem` file to connect to an EC2 Instance then run this command:
```
chmod 400 {{ pem_filename }}.pem
```
Connect to your Amazon EC2 Instance
```
ssh -i {{ pem_filename }}.pem ubuntu@{{ public_ip }}
```
Update the Ubuntu machine
```
sudo apt-get update
sudo apt-get install -y build-essential openssl libssl-dev pkg-config
sudo apt-get install -y nodejs nodejs-legacy
```
Install NPM
```
sudo apt-get install npm
npm cache clean
```
Fix NPM permissions (so we can install angular cli)
```
sudo mkdir /usr/local/lib/node_modules
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```
Install Node
```
npm install -g n
sudo n latest
```
Install Nginx & Git
```
sudo apt-get install nginx
sudo apt-get install git
```
Navigate to /var/www and clone your project
```
cd /var/www
sudo git clone {{ address_to_repo_on_GitLab }}
cd {{ your_repo_name }}
```
Install Angular CLI
```
npm install -g @angular/cli
```
Install `node_modules`
```
sudo npm install
cd public
sudo npm install
```
Create the `dist` folder
```
sudo ng build
```
Set up Nginx
```
cd /etc/nginx/sites-available
sudo vim {{ repo_name }}
```
You're now using VIM.  Press i to go into Insert Mode.  Then, paste the following code:
```
server {
    listen 80;
    location / {
        proxy_pass http://{{ PRIVATE-IP }}:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Press esc to exit Insert Mode.  Then, type :wq  Then press enter to save the file and exit VIM.

Remove the default file
```
sudo rm default
```
Create the symbolic link
```
sudo ln -s /etc/nginx/sites-available/{{ repo_name }} /etc/nginx/sites-enabled/{{ repo_name }}
```
Delete the other default file
```
cd /etc/nginx/sites-enabled
sudo rm default
```
Install PM2
```
npm install pm2 -g
sudo service nginx restart
```
Set up MongoDB
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb
sudo killall mongod
```
Make the `data/db` directory
```
cd /
sudo mkdir data
sudo mkdir data/db
```
Navigate to your project folder
```
cd /var/www/{{ repo_name }}
```
Turn on MongoDB and your server with PM2 (always use sudo with pm2 commands!)
```
sudo pm2 start mongod
sudo pm2 start server.js
sudo service nginx restart
```
Enjoy!
