apt-get update
apt-get install -y apache2
apt-get install -y php5	php5-mysql
apt-get install -y curl
apt-get install python-dev python-setuptools -y -qq
apt-get install -y python-pip
pip install --upgrade pip
pip install Flask
pip install -U flask-cors
apt-get install -y mongodb
apt-get install -y python-pymongo
apt-get install -y python-bson