<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pegawais', function (Blueprint $table) {
            $table->id();
            $table->string('name')->required();
            $table->unsignedBigInteger('nik_nip')->nullable();
            $table->string('instansi')->nullable();
            $table->foreignId('province_id')->nullable();
            $table->foreignId('regency_id')->nullable();
            $table->string('kode_verifikasi')->nullable();
            $table->string('nomor_sertifikat')->nullable();
            $table->string('jenis_diklat')->nullable();
            $table->string('tanggal_pelaksanaan')->nullable();
            $table->string('ditandatangani_oleh')->nullable();
            $table->integer('persentase_penilaian')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pegawais');
    }
};
