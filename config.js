var config = 
{
    "httpPort": 8000,
    
    // Values for connecting to zOS FTP
    "ftpHost": "zos.kctr.marist.edu",
    "ftpPort": "21",
    
	"resTimeout": 5,
	
	"mongodb" :
	{
		"hostname" : "localhost",
		"port"     : 27017,
		"username" : "",
		"password" : "",
		"name"     : "",
		"db"       : "db"
	}
};

module.exports = config;
  
