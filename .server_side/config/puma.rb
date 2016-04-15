bind "unix:///var/run/tryrn.sock"
pidfile "/var/run/tryrn.pid"
rackup "/var/www/cnu/config.ru"

daemonize
workers 2
