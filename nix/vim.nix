with (import <nixpkgs> {});
{
  vim = vim_configurable.customize {
    name = "vim";
    vimrcConfig.customRC = ''
      so ${vimrc}
    '';
  };
}
