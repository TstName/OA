@echo off
git init
set /p input=«Î ‰»Î‘∂≥Ã≤÷ø‚£∫
git remote add origin %input%
git add .
git commit -m "init"
git push -u origin master
