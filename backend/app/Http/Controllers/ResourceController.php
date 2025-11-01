<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resource;

class ResourceController extends Controller
{
    public function index()
    {
        return response()->json(Resource::all());
    }

    public function show($id)
    {
        return response()->json(Resource::findOrFail($id));
    }

    public function store(Request $request)
    {
        $resource = Resource::create($request->all());
        return response()->json($resource, 201);
    }

    public function update(Request $request, $id)
    {
        $resource = Resource::findOrFail($id);
        $resource->update($request->all());
        return response()->json($resource, 200);
    }

    public function destroy($id)
    {
        Resource::destroy($id);
        return response()->json(null, 204);
    }
}
