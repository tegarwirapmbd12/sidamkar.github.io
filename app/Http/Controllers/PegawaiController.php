<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use App\Models\Province;
use App\Models\Regency;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pegawai = Pegawai::paginate(10)->withQueryString();
        return view('admin.pegawai.index',compact('pegawai'), [
            'active' => 'pegawai'
        ]);
    }
    public function provinsi()
    {
        $data = Province::where('name', 'LIKE', '%'. request('q').'%')->paginate(10);

        return response()->json($data);
    }
    public function regency($id)
    {
        $data = Regency::where('province_id', $id)->where('name', 'LIKE', '%'. request('q').'%')->paginate(10);

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.pegawai.create', [
            'active' => 'pegawai'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name'  =>  'required',
            'nik_nip'  =>  'nullable|max:18',
            'instansi'  =>  'nullable',
            'province_id'  =>  'nullable',
            'regency_id'  =>  'nullable',
            'kode_verifikasi'  =>  'nullable',
            'nomor_sertifikat'  =>  'nullable',
            'jenis_diklat'  =>  'nullable',
            'tanggal_pelaksanaan'  =>  'nullable',
            'ditandatangani_oleh'  =>  'nullable',
            'persentase_penilaian'  =>  'nullable',
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
        return view('admin.pegawai.show',[
            'pegawai' => $pegawai,
            'active' => 'pegawai'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $pegawai = Pegawai::find($id);
        return view('admin.pegawai.edit',[
            'pegawai' => $pegawai,
            'active' => 'pegawai'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name'  =>  'required',
            'nik_nip'  =>  'required|max:18',
            'instansi'  =>  'required',
            'province_id'  =>  'required',
            'regency_id'  =>  'required',
            'kode_verifikasi'  =>  'nullable',
            'nomor_sertifikat'  =>  'nullable',
            'jenis_diklat'  =>  'nullable',
            'tanggal_pelaksanaan'  =>  'nullable',
            'ditandatangani_oleh'  =>  'nullable',
            'persentase_penilaian'  =>  'nullable',
        ]);

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



