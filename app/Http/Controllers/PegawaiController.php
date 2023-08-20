<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pegawai = Pegawai::all();
        return view('admin.pegawai.index',['pegawai'=>$pegawai]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.pegawai.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name'  =>  'required',
            'tempat_lahir'  =>  'required',
            'tanggal_lahir'  =>  'required',
            'jabatan'  =>  'required',
            'instansi'  =>  'required',
            'penandatanganan_sertifikat'  =>  'required',
            'tanggal_pelaksanaan'  =>  'required',
            'jumlah_jam_pelajaran'  =>  'required',
            'instansi_penyelenggara'  =>  'required',
            'jenis_diklat'  =>  'required',
            'persentase_penilaian'  =>  'required',
        ]);

        Pegawai::create($validatedData);

        return redirect('/pegawai')
        ->with('success', 'Data Berhasil di Tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pegawai = Pegawai::find($id);
        return view('admin.pegawai.show',['pegawai' => $pegawai]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $pegawai = Pegawai::find($id);
        return view('admin.pegawai.edit',['pegawai' => $pegawai]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name'  =>  'required',
            'tempat_lahir'  =>  'required',
            'tanggal_lahir'  =>  'required',
            'jabatan'  =>  'required',
            'instansi'  =>  'required',
            'penandatanganan_sertifikat'  =>  'required',
            'tanggal_pelaksanaan'  =>  'required',
            'jumlah_jam_pelajaran'  =>  'required',
            'instansi_penyelenggara'  =>  'required',
            'jenis_diklat'  =>  'required',
            'persentase_penilaian'  =>  'required'
        ]);

        // cara 1
        // $pegawai = Pegawai::find($id);
        // $pegawai->name = $request->name;
        // $pegawai->tempat_lahir = $request->tempat_lahir;
        // $pegawai->tanggal_lahir = $request->tanggal_lahir;
        // $pegawai->jabatan = $request->jabatan;
        // $pegawai->instansi = $request->instansi;
        // $pegawai->penandatanganan_sertifikat = $request->penandatanganan_sertifikat;
        // $pegawai->tanggal_pelaksanaan = $request->tanggal_pelaksanaan;
        // $pegawai->jumlah_jam_pelajaran = $request->jumlah_jam_pelajaran;
        // $pegawai->instansi_penyelenggara = $request->instansi_penyelenggara;
        // $pegawai->jenis_diklat = $request->jenis_diklat;
        // $pegawai->persentase_penilaian = $request->persentase_penilaian;

        // $pegawai->save();

        $pegawai = Pegawai::find($id);
        $pegawai->update($request->all());

        return redirect('/pegawai')
        ->with('success', 'Data Berhasil di Ubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pegawai = Pegawai::find($id);
        $pegawai->delete();

        return redirect()->back()
        ->with('info', 'Data Berhasil di Hapus');
    }

    public function search(Request $request) 
    {

        // $searchQuery = $request->input('search');

        // $query = Pegawai::query();

        // if ($searchQuery) {
        //     $query->where('name', 'LIKE', "%$searchQuery%")
        //           ->orWhere('jabatan', 'LIKE', "%$searchQuery%")
        //           ->orWhere('instansi', 'LIKE', "%$searchQuery%");
        // }

        // $pegawai = $query->get();

        // return view('admin.pegawai.index', compact('pegawai'));

        $searchQuery = $request->input('search');

        $query = Pegawai::query();

        if ($searchQuery) {
        $query->where('name', 'LIKE', "%$searchQuery%")
             ->orWhere('jabatan', 'LIKE', "%$searchQuery%")
             ->orWhere('instansi', 'LIKE', "%$searchQuery%");
        }

        $pegawai = $query->get();

        return view('admin.pegawai.search_result', compact('pegawai'));
    }
}


          
            