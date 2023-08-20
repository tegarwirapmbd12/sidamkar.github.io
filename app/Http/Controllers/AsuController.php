<?php

namespace App\Http\Controllers;

use App\Models\Asu;
use Illuminate\Http\Request;

class AsuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $asu = Asu::all();
        return view('admin.asu.index',['asu'=>$asu]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.asu.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name'  =>  'required'
        ]);

        Asu::create($validatedData);

        return redirect('/asu');
    }

    /**
     * Display the specified resource.
     */
    public function show(Asu $asu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Asu $asu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Asu $asu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asu $asu)
    {
        //
    }
}
