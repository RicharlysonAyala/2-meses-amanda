export BASE_PATH=$(cd `dirname $0`;pwd)
export ROOT_PATH=$BASE_PATH/../
# ready to dir
rm -rf $BASE_PATH/dist/**
mkdir $BASE_PATH/dist
mkdir $BASE_PATH/dist/assets
cp $BASE_PATH/index.html $BASE_PATH/dist/
cp $BASE_PATH/assets/** $BASE_PATH/dist/assets/