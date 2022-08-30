export const saveImage = (url: any, fileName: string) => {
    let a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", fileName);
    a.click();
}

export const test = ''