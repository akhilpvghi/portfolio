____________________________________________________________________________________________________________
https://www.downvids.ne-------->for downloading youtube playlist


sanandreas ----->change fm using INSERT and track by FN + F5------------->VROCKPOKEY--->for car----->W,A,S,D for driving car

____________________________________________________________________________________________________________
program basics
https://www.thecrazyprogrammer.com/plsql-programs-examples

live sql-----https://livesql.oracle.com/
____________________________________________________________________________________________________________

cd C:\Users\mini\Desktop\"abc.extension"
https://www.minitool.com/news/how-to-open-a-file-folder-cmd.html
____________________________________________________________________________________________________________


The Kinetic Living Podcast ------------>https://www.youtube.com/watch?v=E1FEAPs8oN8&list=PLcBVsra3A46ppuJaBaleTJuGgoaW3_s_z

Tech Careers------>
https://www.youtube.com/watch?v=oRhAlmX_ijo&list=PLcBVsra3A46ppvu91JgrYFHGJWVY0sAQk&index=21

____________________________________________________________________________________________________________

Word meaning

I find indian dood devisive

carphacist----nervocking---spell Mistake





____________________________________________________________________________________________________________

English phrase

could tell joke to fill time

____________________________________________________________________________________________________________

shortcut of vscode

alt + up and down----->move line up and down

alt + numbers --------->to switch tabs-

ctrl + {,}--------> to move line with tab(8) spaces
-
ctrl +shift + {,}----->to hide unhide function block

alt + side arrow(<- , ->)----->to jump to code 

____________________________________________________________________________________________________________

to remove unnecessary extension files from windows where F is disk location

attrib -h -r -s /d F:\*.*

____________________________________________________________________________________________________________

kill task in windows 


taskkill /f /fi “status eq not responding” 

taskkill /im explorer.exe -f


taskkill /F /IM explorer.exe & start explorer

taskkill /f /fi "WINDOWTITLE eq Photos*" /t  


 Run command-line as an Administrator. Then run the below mention command. type your port number in yourPortNumber

netstat -ano | findstr :<yourPortNumber>


last column is PID

Then you execute this command after identify the PID.
taskkill /PID <typeyourPIDhere> /F

if access is denied --->run as administrator

____________________________________________________________________________________________________________


movie index

http://dl3.haylimoviez.info/Movie%202017/


http://www.isdevelopment.us/Documents/Videos/Videos-Movies/

random----- http://www.ai.sri.com/movies/

http://103.126.12.226/Data/disk2/Movies/Bollywood/2019/

above same as http://103.126.12.226/movie.php?imdbid=tt7469726&cat=Bollywood

____________________________________________________________________________________________________________
in cmd as admin---> peerflix-server----->

now serve---localhost 9000

____________________________________________________________________________________________________________

alt+enter ----->opens file properties in windows

____________________________________________________________________________________________________________

https://www.booleanworld.com/curl-command-tutorial-examples/

____________________________________________________________________________________________________________

https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/-----to use spreadsheet as json

   https://json-csv.com/-----json to excel converter

   https://jsonformatter.org/---json beautifier and viewer

   https://developers.google.com/gdata/samples/spreadsheet_sample

   ____________________________________________________________________________________________________________


before push the code   ..........git remote set-url origin <https://abc.xyz/USERNAME/REPOSITORY.git> 




GIT STASH

git stash save “Your stash message”.

git stash list

git stash apply
________________________________________________________________________________________

rm -d dirname
Copy
To remove non-empty directories and all the files within them, use the r (recursive) option.

mysql -u root -p alexa_spring < ./alexa_spring.sql.sql;

mysqldump -u root -p alexa_spring > alexa_sspring_backup.sql

__________________________________________________________________________________________

ssh -i ./server1.pem bgamble@104.130.115.40---------->HaveAGreatDay---->86fxTvm!$eV

_________________________________________________________________________

git config --global user.name "Frances Totten"
git config --global user.email "frances_t@fabrikam.com"
git config --list 





How to delete a commit in git, local and remote
Posted by adrian.ancona on July 8, 2011
It has happened to me more than once that I make a commit without verifying the changes I am committing. Time after that I review the commit and I notice that there is something in the commit that doesn’t belong there.

In those times what I want to do is make a patch with the changes of the commit, delete the commit, apply the patch and then redo the commit only with the changes I intended. In this post I will only explain how to delete a commit in your local repository and in a remote repository in case you have already pushed the commit.

Delete a local commit
Anthony Dentinger showed me in the comments that you can delete a local commit by doing:

git reset –hard HEAD~

Below is my original post, but you probably just want to use the line above

Lets say there is a repository with 4 commits.

1
2
3
4
5
$git log --pretty=oneline --abbrev-commit
46cd867 Changed with mistake
d9f1cf5 Changed again
105fd3d Changed content
df33c8a First commit
Commit 46cd867 is the most recent commit and the one we want to delete, for doing that, we will use rebase.

1
$git rebase -i HEAD~2
That command will open your default text editor with your two (Change the number 2 with the number of commits you want to get) latest commits:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
pick d9f1cf5 Changed again
pick 46cd867 Changed with mistake

# Rebase 105fd3d..46cd867 onto 105fd3d
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
One thing to notice here is that the most recent commit is the one at the bottom. The comments at the bottom of the file give a description of the things that can be done with the rebase command, but this time none of this options is going to be used, we just need to delete the line that corresponds to the commit we want to delete and save the file.

We can see that the change was applied correctly:

1
2
3
4
$git log --pretty=oneline --abbrev-commit
d9f1cf5 Changed again
105fd3d Changed content
df33c8a First commit
Delete a remote commit
To remove a commit you already pushed to your origin or to another remote repository you have to first delete it locally like in the previous step and then push your changes to the remote.

1
$git push origin +master
Notice the + sign before the name of the branch you are pushing, this tells git to force the push. It is worth to mention that you should be very careful when deleting commits because once you do it they are gone forever. Also, if you are deleting something from a remote repository make sure you coordinate with your team to prevent issues.

______________________________________________________________________
ssh -i ./  ec2-user@54.229.133.99
eval "$(ssh-agent -s)"
 ssh-add ~/azure_key
 git pull origin JsonFormatter
  mvn clean install
  kill $(sudo lsof -t -i:8888)
  nohup bash -c 'mvn spring-boot:run' & tail -n 200 -f nohup.out
  cd JSON%20FormatterTool/
vi nohup.out


______________________________________

https://www.convertcsv.com/csv-to-json.htm

___________________________________________________

reactJs important Component

https://projects.wojtekmaj.pl/

_____________________________________________________

Code useful lines

System.out.println("");
console.log("");

Server
eval "$(ssh-agent -s)" 
ssh-add ~/alexa_projecth/keys/bitbucket


https://alexa.amazon.co.uk/spa/index.html#cards
https://developer.amazon.com/alexa
bengamble7@gmail.com
..1q2w3e
 
 
http://console.aws.amazon.com
bengamble7@gmail.com
..1q2w3e
region: N virginia
Lamda
 
skill Steps branch(alexa-sdk-for-java-login):
1) Create skill
2) copy skill id and paste in alexa-skills-kit-sdk-for-java-2.0.x/samples/helloworld/src/Nova/NovaSpeechletRequestStreamHandler.java
3) Create jar to upload on aws labda
3.1) mvn clean
3.2) mvn install
3.3) mvn assembly:assembly -DdescriptorId=jar-with-dependencies package
3.4) upload Target/java-with-dependencies.jar to aws
4) copy that lamda function id to alexa skill.
 
for Server to deploy code (branch - master)
1) ssh -i ~/Desktop/Key/NovoBox.pem ec2-user@34.254.155.50
2) sudo mvn clean install
3) sudo pkill -9 java
4) sudo nohup java -jar target/alexa-springboot-server.war &sudo tail -n 200 -f nohup.out
ssh -i ~/Desktop/Keys/NovoBox.pem ec2-user@34.254.155.50

https://kshitiz.club/jsonCommand
body--->{"chairID":"9XL4ZK"}


ssh -i ./server1.pem bgamble@104.130.115.40---------->HaveAGreatDay---->86fxTvm!$eV


DNS: Alexa.humantouch.com
IP: 104.130.115.40


To remove an empty directory use the -d option.

rm -d dirname
Copy
To remove non-empty directories and all the files within them, use the r (recursive) option.

rm -r dirname

----->handlingException (latest on server)
@RequestMapping(value = "/getStyleType", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public DeferredResult<ResponseEntity<alexa.model.Response>> getStyleType(HttpServletRequest httpRequest) throws JsonParseException, JsonMappingException, IOException 
	{
	DeferredResult<ResponseEntity<Response>> result = new DeferredResult<>();	
	StyleTypes getStyleTypeRequest = new StyleTypes();
	getStyleTypeRequest.setDeferredResult(result);
	MessageQueue.offer(getStyleTypeRequest);
	return result;
	}

    --->ALexaCodeNewMsgAdded------>branch for alexa skill

    
    SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'tbl_user_master' AND COLUMN_NAME = 'command_type';
	test on alexa
	ask novo start virtual therapist
	Hello. This is the NOVO Virtual Therapist. Please tell me what your name is
	ask novo my name is akhil
	Hello Akhil As you are a new client, I’m going to ask you some questions that will help me prescribe your massage treatment. First, please tell me: How tall you are in inches?
	ask novo i am eighty inches tall
	“OK, got it, 80 inches tall. How long a massage do you typically like? the options are 10, 20, and 30 minutes
	ask novo i would like twenty minutes
	Ok, we'll perform a 20 minute massage. Now here's the best part! What would you say is your goal for today’s massage? You can ask for more energy, to Relax, or Relieve Back Pain, to recover, or for better performance
	ask novo relieve pain
	Would you say the pain is in your upper or lower back?
	ask novo upper back
	OK good... And what style of massage do you feel like today? The options are, Swedish, Shiatsu, Thai Style, and Sports. Or, soft, medium, or hard. and if you're not sure just say: You choose
	ask novo thai
	OK, We'll apply your massage in a Thai style... It looks like we're all set. Please relax and we'll get started. If you need any help during your treatment, just say: Alexa, ask my NOVO for help



name = ?

currentUser


String updateCommandType = "update `user_model` set command_type = ?, currentTime= CURRENT_TIMESTAMP where name = ? and admin_id = "+accessToken;
		int a =this.jdbcTemplate.update(updateCommandType, commandId, currentUser);


		mysql -u root -p alexa_spring < ./alexa_spring.sql.sql;

		Drop DATABASE alexa_spring;


		Open the MySQL command line
Type the path of your mysql bin directory and press Enter
Paste your SQL file inside the bin folder of mysql server.
Create a database in MySQL.
Use that particular database where you want to import the SQL file.
Type source databasefilename.sql and Enter
Your SQL file upload successfully.


scp -i ~/Desktop/Keys/NovoBox.pem ec2-user@34.254.155.50:alexa_projecth/alexaspring/server/sql/alexa_spring.sql /home/quincus/Desktop/akhil/


scp -i ~/Desktop/akhil/alexa.humantouch.com_SSL/server1.pem /home/quincus/Desktop/akhil/bitbucket bgamble@104.130.115.40:~/key

 scp -i ~/Desktop/APIbluerhino.pem  ec2-user@artemis.concept.quincus.com:/home/ec2-user/AlgoAPI/service/reqSaudi.txt

scp -i security_file_location source.txt destiation

scp -i "Desktop\Quincus\APIbluerhino (3).pem" ec2-user@artemis.concept.quincus.com:/home/ec2-user/AlgoAPI/service/reqSaudi.txt

this is when you are not logged into the server


eval "$(ssh-agent -s)"

mysqldump -u root -p alexa_spring > alexa_sspring_backup.sql

sudo service mysql start
use mysql;
uninstall plugin validate_password;
update user set authentication_string=password('root') where user='root';
SET PASSWORD FOR root@'localhost' = PASSWORD('your_password');
FLUSH PRIVILEGES;


https://kshitiz.club/jsonCommand	


		

		Thimgs tried
		List< Ship > shipObject = Arrays.asList( new ObjectMapper().readValue(dataToJson(arrNode), Ship.class));




		 Ship ship =  new ObjectMapper().readValue(dataToJson(arrNode), Ship.class);
                ArrayList<Ship> shipObject = null;
//                shipObject.add(ship);


com.fasterxml.jackson.databind.JsonMappingException: Can not deserialize
 instance of com.quincus.model.Ship
 out of START_ARRAY token







				
	ssh -i ~/Desktop/akhil/Alexa_humanTouch/alexa.humantouch.com_SSL ec2-user@104.130.115.40
The authenticity of host '104.130.115.40 (104.130.115.40)' can't be established.
ECDSA key fingerprint is SHA256:nBKUjjlGNRRMB6ETj4DFH97LEwGKi+zxWHhRodbfHdc.
Are you sure you want to continue connecting (yes/no)? 	



https://stackoverflow.com/questions/991758/how-to-get-pem-file-from-key-and-crt-files	


https://tecadmin.net/convert-ppk-to-pem-using-command/

https://linuxize.com/post/install-java-on-ubuntu-18-04/


sudo -H /bin/bash
cd /etc/apt
do your editing of files
exit



keytool -import -alias ssl -keystore keystore.jks -file javaappperfomance.crt


~/Desktop/checkout/Google_OR_tool/binary_or_tool/or-tools_ubuntu-18.04_v7.1.6720/
or-tools_Ubuntu-18.04-64bit_v7.1.6720$
 make run SOURCE=~/Desktop/checkout/Google_OR_tool/src/my_program.java


cd ~/Desktop/checkout/Google_OR_tool/binary_or_tool/or-tools_ubuntu-18.04_v7.1.6720/or-tools_Ubuntu-18.04-64bit_v7.1.6720
 make run SOURCE=~/Desktop/checkout/Google_OR_tool/src/my_program.java



 make clean
git pull
./autogen.sh
./configure --enable-debug
make
sudo make install

cost is the same as distance, but in other problems the total cost might involve additional factors.

Vehicle Routing Problem

https://alexa.humantouch.com

https://www.javacodegeeks.com/2012/09/simple-rest-client-in-java.html


INTELLIJ IDEA COMMUNITY:
$ sudo snap install intellij-idea-community --classic --edge
INTELLIJ IDEA ULTIMATE:
$ sudo snap install intellij-idea-ultimate --classic --edge


----->to remove license file in intellij--rm -rf ~/.IdeaIC* ~/.IntelliJIdea* ~/.ideaLibSources




Install java in ubuntu-->https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04

   sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
sudo apt-get install oracle-java8-installer



