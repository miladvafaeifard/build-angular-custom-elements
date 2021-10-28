DIR="custom-element-build"

if [ ! -d $DIR ]
then 
    echo -e "Directory $DIR does not exists."
    echo "creating a directory $DIR"
    mkdir $DIR
else
    echo -e "Directory $DIR exists"
fi

