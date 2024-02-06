let nbrePhotocopies = prompt("saisir le nombres de photocopoies");
let prix = 0;
if (nbrePhotocopies <= 10) {
  prix = nbrePhotocopies * 1;
}
if (nbrePhotocopies > 10 && nbrePhotocopies <= 30) {
  prix = (nbrePhotocopies - 10) * 0.09 + 1;
}
if (nbrePhotocopies > 30) {
  prix = (nbrePhotocopies - 30) * 0.08 + 2.8;
}
alert("vous allez payer : " + prix);
