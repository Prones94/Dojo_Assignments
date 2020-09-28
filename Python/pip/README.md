# Practice using pip in a virtual environment

# List of commands
    1. `pip list`
        - Returns the list of pacjagegs in the current environment. Also returns the installed version for each package. Packages are listed in a case-insensitive sorted order.
    2. `deactivate`
        - Deactivates the virtual environment
    3. `source p3Env/bin/activate` 
        - Activates your virtual environment
    4. `pip3 install Django===2.2.4`
        - While in virtual environment installs the 2.2.4 version of Django
        - Using cached sqlparse-0.3.1-py2.py3-none-any.whl (40 kB)
        - Installing collected packages: pytz, sqlparse, Django
        - Successfully installed Django-2.2.4 pytz-2020.1 sqlparse-0.3.1
    5. `pip3 freeze` 
        - A command that allows you to see what modules you have installed the with the pip install command
    6. `pip3 freeze > requirement.txt`
        - Records an environment's current package list into requirements.txt
        - If you want to install the dependencies in a virtual environment, create and activate that envrionemnt first, then use the install from requirements
        - Once you call ls you shouldn't see anythng inside the Desktop 
    7. `pip3 uninstall Django`
        - This command uninstalls the current version of Django that is on your virtual environment
    8. `pip show Django`
        - Shows the version of Django you have installed while in the current virtual environment
    9. `pip search Flask`
        - searches for PyPi packages whose name or summary contains Flask