#!/home/work/.jumbo/bin/expect

set timeout 200
spawn su - fis -c "sh /home/work/repos/fis_plus/test/util/diff/release.sh old"
expect "Password:"
send cqmyg123\r
expect eof
exit
