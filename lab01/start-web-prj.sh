#!/bin/bash

# Prompt the user for the folder name
read -p "Enter the folder name: " DIR_NAME

# 1. Create a new directory if it doesn't already exist
if [ -d "$DIR_NAME" ]; then
    echo "Directory '$DIR_NAME' already exists. Exiting."
    exit 1
else
    mkdir "$DIR_NAME"
    echo "Directory '$DIR_NAME' created."
fi

# 2. Navigate into it
cd "$DIR_NAME" || { echo "Failed to navigate into $DIR_NAME. Exiting."; exit 1; }

# 3. Create a new starter index.html file
echo '''
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css" />
    <title>Hello World</title>
</head>

<body>
    <h1>Hello World</h1>
    <p>Your starter file.</p>
</body>

</html>
''' > index.html
echo "index.html created."

# 4. Create a new starter styles.css file
echo '''
body * {
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
}
''' > styles.css

echo "styles.css created."

# 5. Navigate back to the original directory
cd ..

# 6. Optional: Open the index.html file in a web browser
#    Try one of these commands:

# wslview "$DIR_NAME/index.html"   # WSL
# open "$DIR_NAME/index.html"  # macOS
