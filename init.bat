@echo off
git init
set /p input=������Զ�ֿ̲⣺
git remote add origin %input%
git add .
git commit -m "init"
git push -u origin master
