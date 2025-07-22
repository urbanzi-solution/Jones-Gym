@echo off
:: Git Commit with Optional Push Script
setlocal enabledelayedexpansion

:: Check if we're in a Git repo
git rev-parse --is-inside-work-tree >nul 2>&1 || (
    echo Error: Not inside a Git repository!
    pause
    exit /b 1
)

:: Get commit message
:get_message
set /p commit_msg="Enter commit message (press Enter to skip commit): "

:: If message provided, do commit
if not "!commit_msg!"=="" (
    git add . || (
        echo Error: Failed to add files.
        pause
        exit /b 1
    )
    
    git commit -m "!commit_msg!" || (
        echo Error: Failed to commit changes.
        pause
        exit /b 1
    )
    echo Commit successful.
)

:: Ask to push (whether we committed or not)
:push_prompt
set push_choice=
set /p push_choice="Push to origin/master? (y/n): "
if /i "!push_choice!"=="y" (
    git push origin master || (
        echo Error: Failed to push to origin/master.
        pause
        exit /b 1
    )
    echo Push successful.
) else if /i "!push_choice!"=="n" (
    echo Skipping push.
) else (
    echo Please enter y or n.
    goto push_prompt
)

echo Operation completed.
pause