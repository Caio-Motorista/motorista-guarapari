@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
title Atualizar dominio - Caio Motorista Particular

echo.
echo ========================================================
echo   ATUALIZADOR DE DOMINIO - CAIO MOTORISTA PARTICULAR
echo ========================================================
echo.
echo Este script vai trocar o dominio padrao
echo (caiomotoristaguarapari.com.br) pelo dominio que voce
echo registrou de verdade, em todos os arquivos do projeto.
echo.
echo ========================================================
echo.

set /p NOVO_DOMINIO="Digite seu dominio (ex: motoristaguarapari.com.br): "

if "%NOVO_DOMINIO%"=="" (
    echo.
    echo [ERRO] Voce nao digitou nada. Encerrando.
    pause
    exit /b 1
)

echo.
echo Dominio que sera aplicado: %NOVO_DOMINIO%
echo.
set /p CONFIRMA="Confirma? (s/n): "

if /i not "%CONFIRMA%"=="s" (
    echo Cancelado.
    pause
    exit /b 0
)

echo.
echo Atualizando arquivos...
echo.

powershell -NoProfile -Command ^
  "$old='caiomotoristaguarapari.com.br'; $new='%NOVO_DOMINIO%'; " ^
  "$files=@('index.html','sitemap.xml','robots.txt','obrigado.html','404.html','manifest.json','vercel.json','README.md','docs\01-ESTRATEGIA-SEO.md','docs\02-GOOGLE-ADS.md','docs\03-GOOGLE-MEU-NEGOCIO.md','docs\04-PALAVRAS-CHAVE.md','docs\05-DOMINIO-HOSPEDAGEM.md'); " ^
  "foreach($f in $files){ if(Test-Path $f){ $content=Get-Content $f -Raw -Encoding UTF8; $newContent=$content -replace [regex]::Escape($old), $new; Set-Content $f -Value $newContent -Encoding UTF8 -NoNewline; Write-Host '  [OK] '$f } else { Write-Host '  [Pulou] '$f' (nao encontrado)' } }"

echo.
echo ========================================================
echo   PRONTO! Dominio atualizado em todos os arquivos.
echo ========================================================
echo.
echo Proximos passos:
echo   1. Suba o projeto no GitHub
echo   2. Conecte na Vercel
echo   3. Configure DNS no Registro.br
echo.
echo Veja o arquivo DEPLOY-AGORA.md para o passo a passo.
echo.
pause
