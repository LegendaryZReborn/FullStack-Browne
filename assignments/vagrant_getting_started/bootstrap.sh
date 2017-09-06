apt-get update
apt-get install -y apache2

if ! [ -L /var/www/html ]; then
  rm -rf /var/www/html
  ln -fs /vagrant /var/www/html
fi

apt-get install -y php5	php5-mysql mysql-server
apt-get -f -y install