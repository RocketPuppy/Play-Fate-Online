with (import <nixpkgs> {});
stdenv.mkDerivation {
  name = "play-fate-online";
  src = ./.;
  buildInputs = [
    nodejs-9_x
    yarn
    typescript-vim
  ];
}
