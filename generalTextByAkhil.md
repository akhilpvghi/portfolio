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