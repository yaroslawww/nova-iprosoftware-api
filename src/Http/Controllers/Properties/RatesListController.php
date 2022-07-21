<?php

namespace NovaIprosoftwareApi\Http\Controllers\Properties;

use Angecode\LaravelIproSoft\IproSoftwareFacade;
use Illuminate\Http\Request;
use NovaIprosoftwareApi\Http\Controllers\Controller;

class RatesListController extends Controller
{
    protected function getList(Request $request): \Psr\Http\Message\ResponseInterface
    {
        return IproSoftwareFacade::getPropertyRates($request->route('ipro_id'));
    }
}
