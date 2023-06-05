//item: 로더가 읽을 파일이 item으로 전환됩니다. item은 기본적으로 파일의 컨텐츠를 담고있는 문자열 입니다.
module.exports = function myLoader(item) {
  return item.replace("console.log(", "alert(");
};
