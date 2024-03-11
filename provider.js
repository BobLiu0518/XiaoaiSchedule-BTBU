// From: https://gitee.com/alovelygirl/aishedule/blob/master/%E5%BC%BA%E6%99%BA%E6%95%99%E5%8A%A1/provider.js

function request(tag, url, data) {
    let ss = '';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState + ' ' + xhr.status);
        if (
            (xhr.readyState === 4 && xhr.status === 200) ||
            xhr.status === 304
        ) {
            ss = xhr.responseText;
        }
    };
    xhr.open(tag, url, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
    return ss;
}

function scheduleHtmlProvider(dom = document) {
    //除函数名外都可编辑
    //以下为示例，您可以完全重写或在此基础上更改
    let html = '';
    let tag = true;
    try {
        let ifs = document.getElementsByTagName('iframe');
        for (const element of ifs) {
            const doms = element;
            if (
                doms.src &&
                doms.src.search('/jsxsd/xskb/xskb_list.do') !== -1
            ) {
                const currDom = doms.contentDocument;
                html = currDom.getElementById('kbtable')
                    ? currDom.getElementById('kbtable').outerHTML
                    : currDom.getElementsByClassName('content_box')[0]
                          .outerHTML;
                tag = false;
            }
        }
        // console.log(ifs.length)
        if (tag) {
            // console.log(ifs.length)
            html = dom.getElementById('kbtable').outerHTML;
        }
        return html;
    } catch (e) {
        console.error(e);

        let html = request('get', '/jsxsd/xskb/xskb_list.do', null);
        dom = new DOMParser().parseFromString(html, 'text/html');
        return dom.getElementById('kbtable')
            ? dom.getElementById('kbtable').outerHTML
            : dom.getElementsByClassName('content_box')[0].outerHTML;
    }
}
