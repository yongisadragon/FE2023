function createElement(tag, props, ...children) {
  // tag의 종류가 함수인지 문자열인지 구분하기.
  if (typeof tag === "function") {
    return tag.apply(null, [props, ...children]);
  }
  return { tag, props, children };
}

function renderDom(vDom) {
  //children이 배열일수도 있지만 타고 내려가다보면 textContent일때가 올것이다.. 그때의 예외처리를 먼저 해주쟈.
  if (vDom === undefined) {
    return;
  } else if (typeof vDom === "string") {
    //text일 경우에만 createTextNode되고, 일반 tag일 경우에는 return으로 벗어나서 밑의 map과정 거치도록.
    return document.createTextNode(vDom);
  }

  const el = document.createElement(vDom.tag);
  vDom?.children
    .map((item) => {
      // map의 결과로는 renderDom이 재귀적으로 실행되어 document.createElement(vDom.tag)을 통한 'tag'들이 반환된다. 근데 결과적으론
      return renderDom(item);
    })
    // tag들을 el태그에 전부 append 시켜줘
    .forEach((realEl) => {
      el.append(realEl);
    });
  return el;
}

function render(element, container) {
  container.append(renderDom(element));
  // element는 renderDom안에서 vDom 파라미터로 들어감
  console.log(element);
}

export { createElement, render };
